import { shallowMount } from '@vue/test-utils';
import ToDoList from '../components/ToDoList/ToDoList.vue'
import Vue from "vue";

const factory = (values = {}, props = {}) => {
    return shallowMount(ToDoList, {
        data() {
            return {
                ...values
            }
        }
    })
}

describe('ToDoList', () => {

    const propsData = {};
    let wrapper = factory(data, propsData);
    // wrapper.setProps({ foo: 'bar' });       //Setting props explicitly

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })


    it('should show no todos', () => {
        // const wrapper = shallowMount(ToDoList, {
        //     data() {
        //         return {
        //             todos: [],
        //         }
        //     }
        // })
        // await wrapper.setProps({
        //     todos: []
        // })

        // expect(wrapper.text()).toMatch(/No Todos/)
    })


    // it('renders the correct markup', () => {
    //     expect(wrapper.html()).toContain('<span class="count">0</span>')
    // })

    // it('has a button', () => {
    //     expect(wrapper.contains('button')).toBe(true)
    // })

    // it('button should increment the count', () => {
    //     expect(wrapper.vm.count).toBe(0)
    //     const button = wrapper.find('button')
    //     button.trigger('click')
    //     expect(wrapper.vm.count).toBe(1)
    // })
})



/*
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
        wrapper.setData({ title: 'Go and learn Jest' })
        await Vue.nextTick()        //To wait for the reactive dependency to update as Vue renders it asynchronously
        // await trigger()
        expect(wrapper.vm.title).toBe('Go and learn Jest')
    })*/