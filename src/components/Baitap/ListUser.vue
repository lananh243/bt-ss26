<template>
  <div>
    <h1>Bài tập 2 :</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody v-for="user in listUser" :key="user.id">
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.userName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.dateOfBirth }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button>Sửa</button>
            <button>Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const listUser = computed(() => store.state.infoUser.users);
</script>

<style></style>
