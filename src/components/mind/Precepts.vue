<template>
  <div class="hello">
    <h1>wermkwelrmwe{{ msg }}</h1>
    <h1>{{ this.log_msg }}</h1>
  </div>
</template>

<script>

import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";


// import { collection, getDocs } from "firebase/firestore";
import {db} from 'src/main.js'




export default {
  name: 'Precepts',
  props: {
    msg: String
  },
  data() {
    return {
      log_msg: 'logs'+"\n",
    };
  },

  mounted:function(){
        this.get() //method1 will execute at pageload
  },
  methods: { 
    log(str)
    {
      this.log_msg +=str+"\n";
      

    },
    async get() {
      
      const docRef = doc(db, "users", "01085429052");
      

      // const docSnap = await getDoc(docRef2);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        this.log("Document data:", docSnap.data());
        
        const docRef2 = doc(docRef, "precepts", "2022-10-23");


      } else {
        this.log("No such document!");
      }

      // docSnap.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      // });

    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
 color: aqua;
}
</style>
