<template>
  <div class="hello">
    <h1>wermkwelrmwe{{ msg }}</h1>
    <h1>{{ this.log_msg }}</h1>
  </div>
</template>

<script>

import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";


// import { collection, getDocs } from "firebase/firestore";
import {db} from 'src/main.js'


//
import fixed_value from 'src/vm11.js';



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
    console.log(fixed_value.precepts);

    this.get("01085429052","2022-10-23") //method1 will execute at pageload
  },
  methods: { 
    log(str)
    {
      this.log_msg +=str+"\n";
      

    },
    async get(phone,date) {
      
      const docRef = doc(db, "users", phone);
      

      const unsub = onSnapshot(docRef, (doc) => {//값 변경시 이것을 한번더 수행함. 
        var user = doc.data();

        this.log(user.name);
        this.log(user.phone);
        this.log(user.title);
        console.log("Current data: ", doc.data());
      });

      const docRef2 = doc(docRef, "precepts", date);
        const docSnap2 = onSnapshot(docRef2, (doc) => {//값 변경시 이것을 한번더 수행함. 
            var precept = doc.data();
            console.log(precept);
            this.log(precept.count);
            this.log(precept.row);
        });

    },


    async get3() {
      
      const docRef = doc(db, "users", "01085429052");
      // const docSnap = await getDoc(docRef2);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        var user = docSnap.data();

        this.log(user.name);
        this.log(user.phone);
        this.log(user.title);
        this.log("--------------");

        console.log(user.name);
        // this.log("Document data:", docSnap.data());
        
        const docRef2 = doc(docRef, "precepts", "2022-10-23");
        const docSnap2 = await getDoc(docRef2);
        var precept = docSnap2.data();
        this.log(precept.count);
        this.log(precept.row);
        // this.log(user.title);
        console.log(precept);
      } else {
        this.log("No such document!");
      }


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
