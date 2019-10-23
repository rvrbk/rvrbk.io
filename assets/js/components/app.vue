<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            position: {
                latitude: null,
                longitude: null
            }
        }
    },
    mounted() {
        const scope = this;

        axios.post('https://api.rvrbk.io.test/oauth/token', {
            "grant_type": "client_credentials",
            "scope": "*",
            "client_id": "4",
            "client_secret": "secret"
        }).then((response) => {
            console.log(response);
        });

        axios.get('https://api.rvrbk.io.test/clicks/2019-10-12').then((response) => {
            console.log(response);
        });
        
        console.log(this.$store);
        
        navigator.geolocation.getCurrentPosition((position) => {
            scope.position.latitude = position.coords.latitude,
            scope.position.longitude = position.coords.longitude
        });

        const body = document.getElementsByTagName('body');

        body[0].onclick = (e) => {            
            axios.post('https://api.rvrbk.io.test/click', {
                coords: {
                    x: e.clientX,
                    y: e.clientY
                },
                screen: {
                    width: screen.width,
                    height: screen.height
                },
                useragent: navigator.userAgent,
                position: scope.position
            }).then((response) => {
                console.log(response);
            });
        }
    }  
}
</script>