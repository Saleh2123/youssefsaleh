FROM "mongo:7"

ARG TOPP_USER=topp

RUN useradd --create-home $TOPP_USER && \
    chown --recursive $TOPP_USER:$TOPP_USER /data/db && \
    chown --recursive $TOPP_USER:$TOPP_USER /var/log/mongodb

USER $TOPP_USER
