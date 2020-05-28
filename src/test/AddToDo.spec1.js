import { mount, shallowMount } from '@vue/test-utils';
import AddToDo from '../components/AddToDo/AddToDo.vue'
import Vue from "vue";

const factory = (values = {}, props = {}) => {
    return shallowMount(AddToDo, {
        data() {
            return {
                ...values
            }
        }
    })
}

describe('AddToDo', () => {
    let data = {
        title: 'Listen songs'
    };
    const propsData = {};
    let wrapper = factory(data, propsData);

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('has a add button', () => {
        // assert the error is rendered
        // expect(wrapper.find('.error').exists()).toBe(true)

        // expect(wrapper.find('.add-btn').text()).toEqual('Hello World')

        //Add button should be present when title's lenth > 0
        expect(wrapper.find('.add-btn').exists()).toBeTruthy()

        // see if the message renders
        // expect(wrapper.contains('button')).toBe(true)

        //To perform Snapshot Testing, it will save once and then match hence
        // expect(wrapper.element).toMatchSnapshot()
    })

    it('adding value to input field should reflect in vm instance', async () => {
        data = {
            title: ''
        }
        wrapper = factory(data);
        expect(wrapper.vm.title).toBe('')
        // wrapper.find('input[name=newTodo]').setValue('DSM at 5o'clock')

        wrapper.setData({ title: 'Go and learn Jest' })
        await Vue.nextTick()        //To wait for the reactive dependency to update as Vue renders it asynchronously
        // await trigger()
        expect(wrapper.vm.title).toBe('Go and learn Jest')
    })
})