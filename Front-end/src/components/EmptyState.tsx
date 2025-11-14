import { FiCheckSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-purple-300 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-12 text-center"
    >
      <FiCheckSquare className="mb-4 h-16 w-16 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent" />
      <h3 className="text-xl font-bold text-gray-700">All tasks completed!</h3>
      <p className="mt-2 text-gray-500">Looks like you're all caught up. Add a new task above to get started.</p>
    </motion.div>
  );
};

export default EmptyState;