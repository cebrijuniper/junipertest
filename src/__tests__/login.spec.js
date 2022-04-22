import { shallowMount } from '@vue/test-utils'
import LogIn from '../components/LogIn.vue'

describe('LogIn.vue', () => {
    describe('when loaded', () => {
        it('has the required elements', () => {
            const wrapper = shallowMount(LogIn);
            expect(wrapper.find('.juniper-logo').exists()).toBe(true);
            expect(wrapper.find('.title-email').text()).toBe('E-mail');
            expect(wrapper.find('.input-email').exists()).toBe(true);
            expect(wrapper.find('.title-password').text()).toBe('Password');
            expect(wrapper.find('.input-password').exists()).toBe(true);
            expect(wrapper.find('.btn-log-in').exists()).toBe(true);
            expect(wrapper.find('.btn-log-in').text()).toBe('Login');
        })
    })
})