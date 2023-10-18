variable "aws_region" {
  type        = string
  default = "us-east-1"
}

variable  "var1" {
  type = string
  default = "hola"
}

variable  "map1" {
  type = map(string)
  default = {
    1 = "valor"
  }
}

variable "list1" {
  type = list
  default = [0, 1, 2, 3]
}

variable  "map2" {
  type = map(string)
  default = {
    1 =  "Monday" , 2 =  "Tuesday" , 3 =  "monday" 
  }
}

variable "list2" {
  type = list
  default = ["a", 15, true, 2]
}

