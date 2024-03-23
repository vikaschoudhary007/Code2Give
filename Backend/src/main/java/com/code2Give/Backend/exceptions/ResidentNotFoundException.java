package com.code2Give.Backend.exceptions;

public class ResidentNotFoundException extends RuntimeException{

    public ResidentNotFoundException(String msg){
        super(msg);
    }
}
