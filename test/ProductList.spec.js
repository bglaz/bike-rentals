import { shallowMount } from '@vue/test-utils';
import ProductList from '~components/ProductList.vue';

describe('ProductList.vue', () => {
    it('displays title prop pased in', () => {
      const wrapper = shallowMount(ProductList, {
        propsData: {
          title: 'My Title'
        }
      });
      expect(wrapper.find('h3').text()).toMatch('My Title')
    })
  })