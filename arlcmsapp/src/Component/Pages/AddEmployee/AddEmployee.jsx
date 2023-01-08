import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { fireStore } from "../../Firebase/firebaseConfig";

export default function AddEmployee() {
  return (
    <div>
      <form>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form3Example1" class="form-control" />
              <label class="form-label" for="form3Example1">
                First name
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form3Example2" class="form-control" />
              <label class="form-label" for="form3Example2">
                Last name
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
