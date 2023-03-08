package com.zemoso.dossier.userservice.service.implementation;

import com.zemoso.dossier.userservice.dto.UserDTO;
import com.zemoso.dossier.userservice.entity.Address;
import com.zemoso.dossier.userservice.entity.User;
import com.zemoso.dossier.userservice.entity.UserPreferences;
import com.zemoso.dossier.userservice.entity.UserProfile;
import com.zemoso.dossier.userservice.error.UserNotFoundException;
import com.zemoso.dossier.userservice.helpers.InputDetails;
import com.zemoso.dossier.userservice.mapper.AddressMapper;
import com.zemoso.dossier.userservice.mapper.UserMapper;
import com.zemoso.dossier.userservice.mapper.UserPreferencesMapper;
import com.zemoso.dossier.userservice.mapper.UserProfileMapper;
import com.zemoso.dossier.userservice.repository.AddressRepository;
import com.zemoso.dossier.userservice.repository.UserPreferencesRepository;
import com.zemoso.dossier.userservice.repository.UserProfileRepository;
import com.zemoso.dossier.userservice.repository.UserRepository;
import com.zemoso.dossier.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {


    UserRepository userRepository;

    UserMapper userMapper;

    UserProfileMapper userProfileMapper;

    UserPreferencesMapper userPreferencesMapper;

    AddressMapper addressMapper;







    UserPreferencesRepository preferencesRepository;

    AddressRepository addressRepository;

    UserProfileRepository profileRepository;
@Autowired
    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper, UserProfileMapper userProfileMapper, UserPreferencesMapper userPreferencesMapper, AddressMapper addressMapper, UserPreferencesRepository preferencesRepository, AddressRepository addressRepository, UserProfileRepository profileRepository) {

        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.userProfileMapper = userProfileMapper;
        this.userPreferencesMapper = userPreferencesMapper;
        this.addressMapper = addressMapper;
        this.preferencesRepository = preferencesRepository;
        this.addressRepository = addressRepository;
        this.profileRepository = profileRepository;
    }

    @Override
    public UserDTO getUserById(String id) {
        Optional<User> result = userRepository.findById(id);

        if (result.isEmpty()) {
            throw new UserNotFoundException("Did not find User with given id");
        }


       return userMapper.userToUserDTO(result.get());
    }

    @Override
    public void createUser(InputDetails inputDetails) {
     User user=new User();
     user.setId(inputDetails.getUserId());
     user.setUserName(inputDetails.getEmailId());
     user.setIsActive(0);
     user.setIsExpired(1);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        user.setCreated(dtf.format(now));
        user.setUpdated(null);
        user.setPassword("peter@1234");

        userRepository.save(user);
        UserPreferences preferences=new UserPreferences();
        preferences.setUser(user);
        preferences.setColor("orange");
        preferences.setDesignation("Project Manager");
        preferences.setIndustry("Fintech");
        preferences.setPortfolioType("Fintech");
        preferences.setExperience("2-3 Years");
        preferences.setUser(user);
        preferencesRepository.save(preferences);
        Address address=new Address();
        address.setUser(user);
        address.setState("Pennsylvania");
        address.setCountry("USA");
        addressRepository.save(address);
        UserProfile profile=new UserProfile();
        profile.setUser(user);
        profile.setAge(35);
        String str="ProfileImage";
        profile.setProfileImage(str.getBytes());
        profile.setGender("Male");
        profile.setFirstName("Peter");
        profile.setLastName("Parker");
        profile.setMobileNumber("9999999");
        profileRepository.save(profile);
         }



}
