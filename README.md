# docker-server

### To run  docker-server:
- Clone project from repo
* Run command `docker-compose up -d` in terminal

### to use docker-server:
In **Postman** or **Web Browser** call this urls
```
http://localhost:8080/hello
http://localhost:8080/hello?name=ImanMosayebi
http://localhost:8080/author
```

### to view logs:
- Open docker and go to terminal in docker-server container
- Run command `cd logs` in this terminal
- Run command `cat docker-server.log`
