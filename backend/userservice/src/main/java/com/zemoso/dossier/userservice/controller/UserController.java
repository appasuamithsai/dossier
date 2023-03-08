package com.zemoso.dossier.userservice.controller;

import com.zemoso.dossier.userservice.dto.UserDTO;
import com.zemoso.dossier.userservice.helpers.InputDetails;
import com.zemoso.dossier.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {
    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable("id") String id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public ResponseEntity<String> createNewUser(@RequestBody InputDetails inputDetails) {
         userService.createUser(inputDetails);
        return ResponseEntity.status(HttpStatus.CREATED).body("User Created successfully");

}
}
