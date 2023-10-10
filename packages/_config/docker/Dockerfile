FROM "mongo:7"

RUN useradd --create-home topp
RUN chown --recursive topp:topp /data/db
RUN chown --recursive topp:topp /var/log/mongodb
USER topp
