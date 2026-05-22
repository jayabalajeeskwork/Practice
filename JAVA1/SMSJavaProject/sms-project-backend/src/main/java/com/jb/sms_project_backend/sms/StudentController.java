package com.jb.sms_project_backend.sms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {

        Student savedStudent = service.saveStudent(student);

        return ResponseEntity.ok(savedStudent);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAllStudents() {

        return ResponseEntity.ok(service.getAllStudents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getStudentById(@PathVariable Integer id) {

        Student student = service.getStudentById(id);

        if (student != null) {
            return ResponseEntity.ok(student);
        }

        return ResponseEntity
                .badRequest()
                .body("Student Not Found");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateStudent(
            @PathVariable Integer id,
            @RequestBody Student student) {

        Student updatedStudent = service.updateStudent(id, student);

        if (updatedStudent != null) {
            return ResponseEntity.ok(updatedStudent);
        }

        return ResponseEntity
                .badRequest()
                .body("Student Not Found");
    }

    @PatchMapping("/patch/{id}")
    public ResponseEntity<?> patchStudent(
            @PathVariable Integer id,
            @RequestBody Student student) {

        Student updatedStudent = service.patchStudent(id, student);

        if (updatedStudent != null) {
            return ResponseEntity.ok(updatedStudent);
        }

        return ResponseEntity
                .badRequest()
                .body("Student Not Found");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Integer id) {

        return ResponseEntity.ok(service.deleteStudent(id));
    }
}