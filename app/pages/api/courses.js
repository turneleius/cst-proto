import dbConnect from '../../lib/dbConnect';
import Course from '../../models/Course';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const courses = await Course.find({});
        res.status(200).json({ success: true, data: courses });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const course = await Course.create(req.body);
        res.status(201).json({ success: true, data: course });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
