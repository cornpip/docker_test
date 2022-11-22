FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9
RUN apt-get update && apt-get install -y --no-install-recommends \
    vim\
    nano\
    tzdata\
    adb\
    git

RUN mkdir /code
WORKDIR /code
COPY main.py ./

ENV TZ Asia/Seoul
CMD echo GOOD; uvicorn main:app --reload --host=0.0.0.0 --port=5000 --reload;






# su postgres; psql;  ALTER USER postgres PASSWORD '1234'; psql; ALTER USER postgres PASSWORD '1234'; exit; exit; uvicorn main:app --reload --host=0.0.0.0 --port=5000 --reload; echo FINISH;
#pg_ctlcluster 13 main start; chmod 0600 /home/.pgpass;


    # postgresql=13+225\
    # postgresql-contrib=13+225


# WORKDIR /etc/postgresql/13/main
# COPY pg_hba.conf ./
# COPY postgresql.conf ./
# COPY ./.pgpass /home