FROM openjdk:11
EXPOSE 8762
VOLUME /temp
COPY target/zuul-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]