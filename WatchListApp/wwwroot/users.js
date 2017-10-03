import {HttpClient, json} from 'aurelia-fetch-client';

export class users {

    constructor(){
        this.userList = [];
        this.editing = false;
        this.userApi = 'http://localhost:51161/api/user';

        this.getUsers();
    }

    getUsers(){
        let httpClient = new HttpClient();
        httpClient.fetch(this.userApi, { method: 'get' })
            .then(response => {
                response.json().then(body => {
                    this.userList = body;
                });
            });
    }

    save(){
        console.log(this.user);
        if(!this.user || !this.user.name || !this.user.email){
            alert('Fill all inputs');
            return;
        }

        let httpClient = new HttpClient();
        httpClient.fetch(this.userApi, { method: 'post', body: json(this.user) })
            .then(response => {
                this.editing = false;
                this.getUsers();
                this.user.name = "";
                this.user.email = "";
            });
    }
}