# Project README

## Overview

This project involves creating a server script that binds to a port, handles multiple concurrent connections, reads a configuration file, searches for strings in a text file, and reports execution times among other requirements.

## Prerequisites

- Python 3.x
- Required Python libraries: flask, pytest, mypy
- SSL certificates (certfile and keyfile)

## Running the Project

### Install Dependencies

```
pip install -r requirements.txt
```

### Run the Server

```
cd server
python server.py
```

### Run the Client

```
cd client
python client.py
```

### Run the Tests

```
cd tests
pytest test_server.py
```
