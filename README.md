## «CRUD»

### Описание проекта:

CRUD по взаимодействию с пользователями и реляционной базой данных PostgreSQL.

[Файл, где в качестве базы данных используется массив.](https://github.com/Excellent-84/crud/blob/master/data/data.js)


### Стек технологий:
<img src="https://img.shields.io/badge/javascript-FFFFFF?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/><img src="https://img.shields.io/badge/node.js-FFFFFF?style=for-the-badge&logo=node.js&logoColor=5FA04E"/><img src="https://img.shields.io/badge/PostgreSQL-FFFFFF?style=for-the-badge&logo=PostgreSQL&logoColor=4169E1"/>

### Как запустить проект:

##### Клонировать репозиторий и перейти в него в командной строке:

```
git clone https://github.com/Excellent-84/crud.git
cd crud
```

##### Установить библиотеку для PostgreSQL:

```
npm install pg
```

##### Запустить проект:

```
npm run start
```

### Примеры запросов к API с помощью Postman:

##### Добавление пользователя в базу данных:

Во вкладке Body выбрать x-www-form-urlencoded.
В поле key указать name и age.
В поле value указать их значения.

Метод POST к эндпоинту   http://127.0.0.1:3000/users

Пример ответа:

```
{
    "id": 21,
    "name": "John",
    "age": 30
}
```

##### Получение списка пользователей:

Метод GET к эндпоинту   http://127.0.0.1:3000/users

Пример ответа:

```
[
    {
        "id": 1,
        "name": "John",
        "age": 30
    },
    {
        "id": 2,
        "name": "Jane",
        "age": 25
    },
    ...
]
```

##### Получение пользователя по 'id':

Метод GET к эндпоинту   http://127.0.0.1:3000/users/13

Пример ответа:

```
{
    "id": 13,
    "name": "John",
    "age": 30
}
```

##### Обновление данных пользователя:

Во вкладке Body выбрать x-www-form-urlencoded.
В поле key указать name и age.
В поле value указать их новые значения.

Метод PUT к эндпоинту   http://127.0.0.1:3000/users/21

Пример ответа:

```
{
    "id": 21,
    "name": "John Doe",
    "age": 30
}
```

##### Удаление пользователя из базы данных:

Метод DELETE к эндпоинту   http://127.0.0.1:3000/users/13



#### Автор: [Горин Евгений](https://github.com/Excellent-84)
