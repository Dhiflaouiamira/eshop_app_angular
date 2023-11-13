import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
// Ajoutez d'autres modules selon vos besoins

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  
  formvalue!: FormGroup;
  userobj: User = new User();
  users: User[] = []; // Store the list of users fetched from the server
  searchTerm: string = '';
  // Properties to keep track of the selected user and its index
  selectedUser: User | null = null;
  selectedUserIndex: number | null = null;
  selectedRole = "";

  userRole: string[] = [
    "admin",
    "agent",
    "client",
   
  ];


  constructor(private formbuilder: FormBuilder, private api: UserService) {}

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      username: [''],
      email: [''],
      password: [''],
      role: [''],
      fullName: [''],
      phone: ['']
    });

    // Fetch the list of users when the component initializes
    this.fetchUsers();
  }

  fetchUsers() {
    this.api.findAll().subscribe(
      (users) => {
        this.users = users;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  postUserDetails() {
  
      this.userobj.fullName = this.formvalue.value.fullName;
      this.userobj.email = this.formvalue.value.email;
      this.userobj.username = this.formvalue.value.username;
      this.userobj.phone = this.formvalue.value.phone;
      this.userobj.password = this.formvalue.value.password;
      this.userobj.role = this.formvalue.value.role;
      this.userobj.image = this.formvalue.value.image;

      this.api.addUser(this.userobj).subscribe(
        (res) => {
          console.log(res);
          alert('Client added successfully');

          // After adding the user, fetch the updated list of users again
          this.fetchUsers();
        },
        (err) => {
          console.error(err);
          if (err.status === 409) {
            // 409 indicates a duplicate key error (user already exists)
            alert('User already exists.');
          } else {
            alert('Something went wrong. Please check the console for more details.');
          }
        }
      );
    
  }

  editUser(user: User) {
    // Set the form values to the selected user's data
    this.formvalue.patchValue({
      username: user.username,
      email: user.email,
      role: user.role,
      fullName: user.fullName,
      phone: user.phone,
      image: user.image,

      password: '' // Password will not be shown, so we leave it empty
    });

    // Keep track of the selected user and its index
    this.selectedUser = user;
    this.selectedUserIndex = this.users.indexOf(user);
  }

  deleteUser(user: User) {
    if (!user._id) {
      // If the _id is undefined, do not proceed with the deletion
      console.error('User _id is undefined.');
      return;
    }
  
    if (confirm('Are you sure you want to delete this client?')) {
      this.api.deleteUser(user._id).subscribe(
        (res) => {
          console.log(res);
          alert('Client deleted successfully');
  
          // After deleting the user, fetch the updated list of users again
          this.getAllUsers();
        },
        (err) => {
          console.error(err);
          alert('Something went wrong. Please check the console for more details.');
        }
      );
    }
  }


  updateUserDetails() {
    if (this.selectedUser) {
      // Update the selected user with form data
      this.selectedUser.fullName = this.formvalue.value.fullName;
      this.selectedUser.email = this.formvalue.value.email;
      this.selectedUser.phone = this.formvalue.value.phone;
      this.selectedUser.role = this.formvalue.value.role;
      this.selectedUser.username = this.formvalue.value.username;
      this.userobj.password = this.formvalue.value.password;
      this.userobj.image = this.formvalue.value.image;

      // Make the PUT request to update the user
      this.api.updateUser(this.selectedUser).subscribe(
        (updatedUser) => {
          console.log(updatedUser);
          alert('Client updated successfully');
  
          // After updating the user, fetch the updated list of users again
          this.fetchUsers();
        },
        (err) => {
          console.error(err);
          alert('Something went wrong. Please check the console for more details.');
        }
      );
    }
  }
  getAllUsers(): void {
    this.api.findAll().toPromise()
    .then(uu => this.users = uu)
    .catch(err => console.log)
  }
 // Méthode pour effectuer une recherche lorsque le terme de recherche est saisi
 
 
 searchUsers(e: any) { 
  if (this.searchTerm.trim() == '') {
    // If the search term is empty, show all the users
    this.getAllUsers(); // Assign the users to this.users
  } else {
    // Otherwise, perform a search on the users based on the search term
   this.api.searchUsers(this.searchTerm).toPromise()
   .then(data => this.users = data)
   .catch(err => console.log)
  }
}


select(role: string) {
  this.selectedRole = role
  this.api.filterbyrole(role).toPromise()
  .then(res => this.users = res)
  .catch(err => console.log)
}

}



