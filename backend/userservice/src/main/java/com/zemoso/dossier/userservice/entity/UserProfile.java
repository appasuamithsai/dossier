package com.zemoso.dossier.userservice.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "user_profile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "age")
    private int age;

    @Column(name = "mobile")
    private String mobileNumber;

    @Column(name = "gender")
    private String gender;

    @Column(name = "profile_image")
    private byte[] profileImage;

    @OneToOne
    @JsonBackReference
    private User user;

    @Override
    public String toString() {
        return "UserProfile{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", mobileNumber=" + mobileNumber +
                ", gender='" + gender + '\'' +
                '}';
    }
}
