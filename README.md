express-test-app
====

Abstract
----

A simple Express based test app for testing purposes.

Build and Push
----

Build

```bash
docker build -t 928913977666.dkr.ecr.eu-central-1.amazonaws.com/express-test-app .
```

Docker Login and Push

```bash
make -C.. docker-login | bash
docker push 928913977666.dkr.ecr.eu-central-1.amazonaws.com/express-test-app
```

