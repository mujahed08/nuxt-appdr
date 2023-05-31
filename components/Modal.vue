<template>
    <div class="modal fade show" :class="{ loadmodal : modalFlag }" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <!-- Modal -->
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button @click="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {{modalMsg}}
            </div>
            <div class="modal-footer">
                <button @click="close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    <div v-if="modalFlag" class="modal-backdrop fade show"></div>
</template>

<script setup lang="ts">
const modalFlag = computed(() => useUi().modalFlag)
const modalMsg = computed(() => useUi().modalMsg)
const close = () => {
    useUi().toggleModal('')
}
</script>

<style>
    .loadmodal {
        display: block;
    }
</style>