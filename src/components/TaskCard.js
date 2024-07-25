import {
  Card,
  CardHeader,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassEnd,
  faHourglassHalf,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { LOW_PRIORITY, MEDIUM_PRIORITY ,HIGH_PRIORITY} from "../utils/constant.utils";

const TaskCard = ({ task, setEditTask, onOpen, removeTask, completeTask }) => {
  return (
    <Card borderRadius="15px" shadow="md">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            {task.is_completed ? (
              <IconButton
                variant="solid"
                colorScheme="green"
                aria-label="completed"
                fontSize="20px"
                isRound
                icon={<CheckIcon />}
              />
            ) : moment(task.due_date).isAfter(new Date()) ? (
              <IconButton
                variant="solid"
                colorScheme="yellow"
                aria-label="in-progress"
                fontSize="20px"
                isRound
                icon={<FontAwesomeIcon icon={faHourglassHalf} />}
              />
            ) : (
              <IconButton
                variant="solid"
                colorScheme="red"
                aria-label="overdue"
                fontSize="20px"
                isRound
                icon={<FontAwesomeIcon icon={faHourglassEnd} />}
              />
            )}
            <Box>
              <Heading size="sm">{task.title}</Heading>
              <Text>{task.description}</Text>
            </Box>
          </Flex>
          <Flex alignItems="center">
            {task.priority === LOW_PRIORITY && (
              <Badge colorScheme="green">Low</Badge>
            )}
            {task.priority === MEDIUM_PRIORITY && (
              <Badge colorScheme="yellow">Medium</Badge>
            )}
            {task.priority === HIGH_PRIORITY && <Badge colorScheme="red">High</Badge>}
          </Flex>
        </Flex>
      </CardHeader>
      <Box display="flex" justifyContent="space-between" p="6">
        <Box>
          <Text fontSize="sm" color="gray.500">
            Due: {moment(task.due_date).format("MMM DD, YYYY")}
          </Text>
        </Box>
        <Box display="flex" gap="2">
          <IconButton
            aria-label="Edit Task"
            icon={<EditIcon />}
            onClick={() => {
              setEditTask(task);
              onOpen();
            }}
            size="sm"
            colorScheme="blue"
          />
          <IconButton
            aria-label="Complete Task"
            icon={<FontAwesomeIcon icon={faSquareCheck} />}
            onClick={() => completeTask(task.id)}
            size="sm"
            colorScheme="green"
          />
          <IconButton
            aria-label="Delete Task"
            icon={<DeleteIcon />}
            onClick={() => removeTask(task.id)}
            size="sm"
            colorScheme="red"
          />
        </Box>
      </Box>
    </Card>
  );
};

export default TaskCard;
