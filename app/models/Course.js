import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
