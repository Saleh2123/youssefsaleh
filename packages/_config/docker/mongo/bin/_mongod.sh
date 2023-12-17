#!/usr/bin/env bash

set \
    -o errexit \
    -o nounset \
    -o pipefail

_TIMEOUT=8

_mongosh() {
    mongosh --port "$_TOPP_MONGO_PORT" --eval "$1"
}

_shutdown() {
    _mongosh "db.shutdownServer({ timeoutSecs: $_TIMEOUT })" || true
}

_main() {
    trap _shutdown SIGTERM SIGINT

    mongosh --nodb --eval 'disableTelemetry()'

    mongod \
        --port "$_TOPP_MONGO_PORT" \
        --replSet rs0 \
        --bind_ip_all &
    local _pid="$!"

    while ! { _mongosh 'rs.status()' || _mongosh 'rs.initiate()'; }; do
        sleep 1
    done

    wait "$_pid"
}

_main
