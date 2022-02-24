import mixpanel from 'mixpanel-browser';
export default {
    data() {
        return {
            id: '402bcde1b235a8ce3474e2bff7f457e0'
        };
    },
    created() {
        mixpanel.init(this.id);
    },
    methods: {
        track(event, data) {
            mixpanel.track(event, data);
        }
    }
}