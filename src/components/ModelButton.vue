<template>
  <div>
    <button @click="modalOpen = true">弹出模态窗口</button>

    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          父元素为 body 的弹窗
          <button @click="modalOpen = false">关闭</button>
        </div>
      </div>
    </teleport>

  </div>
</template>

<script>
export default {
  name: "ModelButton",
  emits: [],
  data() {
    return {
      modalOpen: false
    }
  }


}
</script>

<style scoped>

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding:5px;
}

</style>