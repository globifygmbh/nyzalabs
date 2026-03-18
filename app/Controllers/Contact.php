<?php

namespace App\Controllers;

use App\Models\ContactModel;
use CodeIgniter\HTTP\ResponseInterface;

class Contact extends BaseController
{
    public function submit(): ResponseInterface
    {
        $validation = \Config\Services::validation();

        $validation->setRules([
            'name'    => 'required|max_length[100]',
            'surname' => 'required|max_length[100]',
            'email'   => 'required|valid_email|max_length[255]',
            'message' => 'required|max_length[2000]',
        ]);

        if (! $validation->withRequest($this->request)->run()) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors(),
            ]);
        }

        $model = new ContactModel();

        $model->insert([
            'name'    => $this->request->getPost('name'),
            'surname' => $this->request->getPost('surname'),
            'email'   => $this->request->getPost('email'),
            'number'  => $this->request->getPost('number'),
            'company' => $this->request->getPost('company'),
            'budget'  => $this->request->getPost('budget'),
            'message' => $this->request->getPost('message'),
        ]);

        return $this->response->setJSON([
            'status' => 'success',
        ]);
    }
}
