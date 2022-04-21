import { mount } from '@vue/test-utils'

import ContentHeading from '../components/ContentHeading.vue'

describe('ContentHeading.vue', () => {
    let cmp;

    beforeEach(() => {
        cmp = mount(ContentHeading, {
        propsData: {}
        });
    })//reset props before each test

    it('returns empty string if prop not passed in', () => {
      expect(cmp.find(".content-label").text()).toBe("")
    })

    it('returns prop value if prop passed in', () => {
      cmp = mount(ContentHeading, {
        propsData: {
          label: "Dashboard"
        }
      })
      expect(cmp.find(".content-label").text()).toBe("Dashboard")
    })
  
})
