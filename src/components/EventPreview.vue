<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    
                        <p class="title is-4"> {{ name }} </p>
                    
                        <!-- <p class="subtitle is-6"> {{ event }} </p> -->
                    
                </div>
            </div>

            <div class="content">
                
                    <p>{{ description }} </p>
                
                    <p>{{ type }} </p>

                    <!-- <p>{{ recipient }} </p>-->
                
                    <p>{{ email }} </p>
                
                    <p>Start date: {{ initDate }} </p>
                
                    <p>End date: {{  endDate }} </p> 

                    <a href="url"><p>{{ url }}</p></a>
                
                  
                
                <br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EventPreview",
    props: {
        name: String,
        address: String,
        description: String,
        email: String,
        initDate: String,
        url: String,
        endDate: String,
        type: String
    }
};
</script>

<style>

</style>