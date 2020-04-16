import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
    components: ({
        HelloWorld,
    }),
})

export default class HomeManagement extends Vue {
    msg: string = '';

    created() {
        const _this = this;
        _this.msg = 'test';
    }
}
