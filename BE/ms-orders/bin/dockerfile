FROM openjdk:11
EXPOSE 8082
VOLUME /temp
COPY target/ms-orders-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]