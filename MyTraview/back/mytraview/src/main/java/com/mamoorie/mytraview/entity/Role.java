package com.mamoorie.mytraview.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Role {
    GENE("老馆蜡历"),
    PREM("橇府固决蜡历");

    private String description;
}
