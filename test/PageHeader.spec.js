import { shallowMount } from '@vue/test-utils';
import PageHeader from '~components/PageHeader.vue';

describe('PageHeader.vue', () => {
    it('displays title prop pased in', () => {
      const wrapper = shallowMount(PageHeader, {
        propsData: {
          title: 'My Title'
        }
      });
      expect(wrapper.find('h1').text()).toMatch('My Title')
    })
  })