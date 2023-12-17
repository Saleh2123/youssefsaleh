ARG topp_image_mongo
FROM $topp_image_mongo

ARG topp_user

RUN useradd --create-home $topp_user && \
    chown --recursive $topp_user:$topp_user /data/db && \
    chown --recursive $topp_user:$topp_user /var/log/mongodb

USER $topp_user
