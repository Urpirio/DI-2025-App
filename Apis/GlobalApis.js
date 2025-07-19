

export const GlobalApis = {
    ApiImg: 'https://directus-prueba.dominicanainnova.gob.do/assets/',
    ApiUSer: 'https://directus-prueba.dominicanainnova.gob.do/users/',
    ApiUserInEvent: 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]=',
    ApiTodosEventos:'https://directus-prueba.dominicanainnova.gob.do/items/events/?sort=start_time&fields=title,description,tags,room.*,speakers_event.*.*,start_time,end_time,id,show_at_home,category',
    ApiUser_Event: 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/',
    ApiToken: 'https://directus-prueba.dominicanainnova.gob.do/auth/login/',
    ApiInfoUser: 'https://directus-prueba.dominicanainnova.gob.do/users/me'
};