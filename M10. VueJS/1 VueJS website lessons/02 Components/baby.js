Vue.component('baby',{
    template: //html
    `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{info.name}}</h5>
            <p class="card-text">Age: {{info.age}}</p>
            <p class="card-text">Location: {{info.location}}</p>
        </div>
    </div>
    `,
    props: ['info']
})