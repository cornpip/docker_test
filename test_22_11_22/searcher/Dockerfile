FROM python:3.9.6

RUN apt update && apt install -y --no-install-recommends \
    vim\
    nano\
    tzdata\
    adb\
    git\
    libgl1-mesa-glx

RUN mkdir /code
WORKDIR /code

COPY requirements.txt ./
RUN pip install -U pip
RUN pip install -r requirements.txt

COPY . ./

ENV TZ Asia/Seoul
# CMD python -u main.py