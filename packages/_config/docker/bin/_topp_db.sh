#!/usr/bin/env bash

TIMEOUT=8

_mongosh() {
    mongosh --port "$_TOPP_DB_PORT" --eval "$1"
}

_shutdown() {
    _mongosh "db.shutdownServer({ timeoutSecs: $TIMEOUT })"
    exit 0
}

trap _shutdown SIGTERM SIGINT

mongosh --nodb --eval 'disableTelemetry()'

mongod \
    --port "$_TOPP_DB_PORT" \
    --replSet rs0 \
    --bind_ip_all &
_pid="$!"

while ! { _mongosh 'rs.status()' || _mongosh 'rs.initiate()'; }; do
    sleep 1
done

wait "$_pid"
