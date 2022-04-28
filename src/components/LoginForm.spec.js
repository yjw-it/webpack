import { shallowMount } from "@vue/test-utils";
import LoginForm from "./LoginForm.vue";

describe("loginForm.vue", () => {
  test("컴포넌트가 마운팅되면 username이 존재하고 초기값이 설정되어 있어야 한다.", () => {
    //const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe("");
  });
  test("아이디는 이메일 형식이어야 한다.", () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: "test",
        };
      },
    });
    const usernameInput = wrapper.find("#username");
    console.log(usernameInput.element.value);
  });
});
