// models/CourseModel.js
const pool = require('../../config/conection/db');

class CourseModel {
    // Obtener todos los cursos
    async getAllCourses() {
        const [courses] = await pool.query('SELECT * FROM courses');
        return courses;
    }

    // Crear un nuevo curso
    async createCourse(name, description) {
        const [result] = await pool.query('INSERT INTO courses (name, description) VALUES (?, ?)', [name, description]);
        return { id: result.insertId, name, description };
    }

    // Actualizar un curso
    async updateCourse(id, name, description) {
        const [result] = await pool.query('UPDATE courses SET name = ?, description = ? WHERE id = ?', [name, description, id]);
        return result.affectedRows;
    }

    // Eliminar un curso
    async deleteCourse(id) {
        const [result] = await pool.query('DELETE FROM courses WHERE id = ?', [id]);
        return result.affectedRows;
    }
}

module.exports = CourseModel;
