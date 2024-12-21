#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <folder_name>"
  exit 1
fi

FOLDER_NAME=$1

mkdir -p modules/$FOLDER_NAME/{adapter,application,domain,infras}

mkdir -p modules/$FOLDER_NAME/adapter/{internal,rest,ws,rpc}
mkdir -p modules/$FOLDER_NAME/application/{dtos,services,commands,queries,handlers}
mkdir -p modules/$FOLDER_NAME/domain/{entities,events,values}
mkdir -p modules/$FOLDER_NAME/infras/{repository,data-sources}

touch modules/$FOLDER_NAME/$FOLDER_NAME.module.ts
touch modules/$FOLDER_NAME/main.ts

touch modules/$FOLDER_NAME/adapter/rest/product.controller.ts
touch modules/$FOLDER_NAME/adapter/rest/product.dto.ts
touch modules/$FOLDER_NAME/application/dtos/create-product.dto.ts
touch modules/$FOLDER_NAME/application/services/product.command.service.ts
touch modules/$FOLDER_NAME/application/services/product.query.service.ts
touch modules/$FOLDER_NAME/application/commands/create-product.command.ts
touch modules/$FOLDER_NAME/application/queries/get-product.query.ts
touch modules/$FOLDER_NAME/application/handlers/create-product.handler.ts
touch modules/$FOLDER_NAME/application/handlers/get-product.handler.ts
touch modules/$FOLDER_NAME/domain/entities/product.entity.ts
touch modules/$FOLDER_NAME/domain/events/product-created.event.ts
touch modules/$FOLDER_NAME/domain/values/price.value.ts
touch modules/$FOLDER_NAME/infras/data-sources/product.api.ts
touch modules/$FOLDER_NAME/infras/repository/product.repository.ts

echo "Project structure created successfully"
