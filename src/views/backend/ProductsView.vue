<!-- eslint-disable vue/no-parsing-error -->
<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    Product list
  </h2>

  <!-- ตารางแสดงสินค้า -->
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-50"
          >
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Product</th>
            <th class="px-4 py-3">Price</th>
            <th class="px-4 py-3">By</th>
            <th class="px-4 py-3">Updated</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

            <tr v-for="product in products.data" :key="product.id" class="text-gray-700 dark:text-gray-400 hover:bg-blue-100">
              <td class="px-4 py-3 text-sm">{{ product.id }}</td>
              <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" :src="product.image" alt="" loading="lazy"/>
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                          <p class="font-semibold">{{ product.name }}</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Created {{ product.created_at }}</p>
                      </div>
                  </div>
              </td>
              <td class="px-4 py-3 text-sm">{{ product.price }}</td>
              <td class="px-4 py-3 text-sm">{{ product.user_id }}</td>
              <td class="px-4 py-3 text-sm">Updated {{ product.updated_at }}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import http from "@/services/BackendService";
  export default {
    data() {
      return {
        products: [],
        currentPage: 0,
      };
    },
    mounted() {
      this.currentPage = 1;
      // อ่านสินค้าจาก API
      // let response = http.get(`products?page=${this.currentPage}`)
      // let responseProduct = response.data
      // this.products = responseProduct

      // console.log(this.products)

      http.get(`products?page=${this.currentPage}`).then((response) => {
        let responseProduct = response.data;
        this.products = responseProduct;
        console.log(responseProduct);
      });
    },
  };
</script>
