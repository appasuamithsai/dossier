package com.zemoso.dossier.userservice.service.implementation;

import com.zemoso.dossier.userservice.entity.Address;
import com.zemoso.dossier.userservice.entity.User;
import com.zemoso.dossier.userservice.entity.UserPreferences;
import com.zemoso.dossier.userservice.entity.UserProfile;
import com.zemoso.dossier.userservice.error.UserNotFoundException;
import com.zemoso.dossier.userservice.helpers.InputDetails;
import com.zemoso.dossier.userservice.repository.AddressRepository;
import com.zemoso.dossier.userservice.repository.UserPreferencesRepository;
import com.zemoso.dossier.userservice.repository.UserProfileRepository;
import com.zemoso.dossier.userservice.repository.UserRepository;
import com.zemoso.dossier.userservice.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
class UserServiceImplTest {
    @MockBean
    UserRepository userRepository;

    @Autowired
    UserService userService;
    @MockBean
    UserPreferencesRepository preferencesRepository;
    @MockBean
    AddressRepository addressRepository;
    @MockBean
    UserProfileRepository profileRepository;
    @Test
    void getUser() {

        User user=new User("2","Parker","Peterparker@gmail.com",0,1,"Created",null);
        when(userRepository.findById("2")).thenReturn(Optional.of(user));

        assertEquals("Peterparker@gmail.com", userService.getUserById("2").getUserName());
    }
    @Test
    void getUserException() {

        Exception exception = assertThrows(UserNotFoundException.class, () -> {
            userService.getUserById("1");
        });
        String expectedMessage = "Did not find User with given id";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);

    }
    @Test
    void createUserTest() {
        InputDetails inputDetails=new InputDetails("userId","peter@gmail.com","Peter","Parker");

        userService.createUser(inputDetails);
        verify(userRepository, times(1)).save(any());
        verify(preferencesRepository, times(1)).save(any());
        verify(addressRepository, times(1)).save(any());
        verify(profileRepository, times(1)).save(any());
    }


}
