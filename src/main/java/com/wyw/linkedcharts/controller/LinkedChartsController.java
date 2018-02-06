package com.wyw.linkedcharts.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author wyw
 * @date 2018\2\6 0006 15:54
 */
@Controller
public class LinkedChartsController {

    @GetMapping(value = "/index")
    public String linkedCharts() {
        return "html/linkedCharts.html";
    }

}
