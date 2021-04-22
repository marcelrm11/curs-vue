<template>
    <FormValidation>
        <template #name>
            <div class="form-group" :key="'1'">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter name" required pattern="[A-Za-z]{6,13}" v-tooltip:top="'only numbers, 6-13 characters'">
            </div>
        </template>
        <template #phone>
            <div class="form-group" key="'2'">
                <label for="phone">Phone number</label>
                <input type="tel" class="form-control" id="phone" placeholder="Enter phone number" required pattern="[0-9]+" v-tooltip:top="'only numbers'">
            </div>
        </template>
        <template #postal>
            <div class="form-group" key="'3'">
                <label for="postal">Postal code</label>
                <input type="number" class="form-control" id="postal" placeholder="Enter postal code" required pattern="[0-9]+" v-tooltip:top="'only numbers'">
            </div>
        </template>
        <template #email>
            <div class="form-group" key="'4'">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" required>
            </div>
        </template>
        <template #password>
            <div class="form-group" key="'5'">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" required v-model="p1" pattern="([A-Z]+[a-z]+.){6,13}" v-tooltip:top="'at least 1 low-case, 1 upper-case and a total of 6-13 characters'">
            </div>
            <div class="form-group" key="'6'">
                <label for="confpassword">Confirm password</label>
                <input type="password" class="form-control" id="confpassword" placeholder="Confirm password" required
                :class="[{'is-invalid':p2!=p1},{'is-valid':p2==p1&&p2!=''}]" v-model="p2">
            </div>
        </template>
        <template #submit>
            <button type="submit" class="btn btn-primary" key="'7'">Submit</button>
        </template>
    </FormValidation>
</template>

<script>
    import FormValidation from './FormValidation'

    export default {
        name: 'Formulari',
        data() {
            return {
                p1: '',
                p2: ''
            }
        },
        components: {
            FormValidation
        }
    }
</script>