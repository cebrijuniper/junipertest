import { mount } from '@vue/test-utils'

import ContentHeading from '../components/ContentHeading.vue'

describe('Form.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(ContentHeading, {
      propsData: {}
    });
  })//reset props before each test

  describe('Content Heading', () => {
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
})
