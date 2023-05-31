export const useUi = defineStore('uiId', {
    state: () => {
      return {
        loading: false,
        modal : false,
        modalMessage: ''
      }
    },
    getters: {
      loadingFlag: (state) => state.loading,
      modalFlag: (state) => state.modal,
      modalMsg: (state) => state.modalMessage,
    },
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      toggleModal(message) {
        this.modal = !this.modal;
        this.modalMessage = this.modal ? message : '';
      },
      randomizeCounter() {
        this.count = Math.round(100 * Math.random())
      },
    },
})