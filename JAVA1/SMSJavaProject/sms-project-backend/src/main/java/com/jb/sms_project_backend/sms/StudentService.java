package com.jb.sms_project_backend.sms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student getStudentById(Integer id) {

        Optional<Student> optional = repository.findById(id);

        if(optional.isPresent()) {
            return optional.get();
        }

        return null;
    }

    public Student updateStudent(Integer id, Student student) {

        Student existingStudent = repository.findById(id).orElse(null);

        if(existingStudent != null) {

            existingStudent.setName(student.getName());
            existingStudent.setAge(student.getAge());
            existingStudent.setMarks(student.getMarks());
            existingStudent.setMobile(student.getMobile());
            existingStudent.setActive(student.getActive());
            existingStudent.setGrade(student.getGrade());
            existingStudent.setAttendance(student.getAttendance());

            return repository.save(existingStudent);
        }

        return null;
    }

    public Student patchStudent(Integer id, Student student) {

        Student existingStudent = repository.findById(id).orElse(null);

        if(existingStudent != null) {

            if(student.getName() != null) {
                existingStudent.setName(student.getName());
            }

            if(student.getAge() != null) {
                existingStudent.setAge(student.getAge());
            }

            if(student.getMarks() != null) {
                existingStudent.setMarks(student.getMarks());
            }

            if(student.getMobile() != null) {
                existingStudent.setMobile(student.getMobile());
            }

            if(student.getActive() != null) {
                existingStudent.setActive(student.getActive());
            }

            if(student.getGrade() != null) {
                existingStudent.setGrade(student.getGrade());
            }

            if(student.getAttendance() != null) {
                existingStudent.setAttendance(student.getAttendance());
            }

            return repository.save(existingStudent);
        }

        return null;
    }

    public String deleteStudent(Integer id) {

        repository.deleteById(id);

        return "Student Deleted Successfully";
    }

}